#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Run this after deployment to verify everything is working
 */

const https = require('https');
const http = require('http');

async function checkUrl(url, expectedStatus = 200) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      resolve({
        url,
        status: res.statusCode,
        headers: res.headers,
        success: res.statusCode === expectedStatus
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        error: err.message,
        success: false
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        success: false
      });
    });
  });
}

async function verifyDeployment(baseUrl) {
  console.log(`🚀 Verifying deployment: ${baseUrl}\n`);
  
  const checks = [
    { name: 'Main Page', url: baseUrl, expectedStatus: 200 },
    { name: 'Not Found Page', url: `${baseUrl}/non-existent-page`, expectedStatus: 404 },
  ];
  
  const results = [];
  
  for (const check of checks) {
    process.stdout.write(`Checking ${check.name}... `);
    const result = await checkUrl(check.url, check.expectedStatus);
    results.push({ ...check, ...result });
    
    if (result.success) {
      console.log('✅');
    } else {
      console.log(`❌ (${result.status})`);
    }
  }
  
  console.log('\n📊 Results Summary:');
  console.log('==================');
  
  let allPassed = true;
  
  for (const result of results) {
    const status = result.success ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} ${result.name}: ${result.status}`);
    if (!result.success) allPassed = false;
  }
  
  // Check security headers
  const mainPageResult = results.find(r => r.name === 'Main Page');
  if (mainPageResult && mainPageResult.headers) {
    console.log('\n🔒 Security Headers:');
    console.log('==================');
    
    const securityHeaders = {
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'DENY',
      'x-xss-protection': '1; mode=block',
      'referrer-policy': 'origin-when-cross-origin'
    };
    
    for (const [header, expectedValue] of Object.entries(securityHeaders)) {
      const actualValue = mainPageResult.headers[header];
      const hasHeader = actualValue === expectedValue;
      const status = hasHeader ? '✅' : '❌';
      console.log(`${status} ${header}: ${actualValue || 'missing'}`);
      if (!hasHeader) allPassed = false;
    }
  }
  
  console.log(`\n🎯 Overall Status: ${allPassed ? '✅ ALL CHECKS PASSED' : '❌ SOME CHECKS FAILED'}`);
  
  if (allPassed) {
    console.log('\n🎉 Deployment verification successful!');
    console.log('Your application is ready for production use.');
  } else {
    console.log('\n⚠️ Some checks failed. Please review the results above.');
  }
  
  return allPassed;
}

// Main execution
const args = process.argv.slice(2);
const url = args[0];

if (!url) {
  console.log('Usage: node verify-deployment.js <URL>');
  console.log('Example: node verify-deployment.js https://your-app.vercel.app');
  process.exit(1);
}

verifyDeployment(url)
  .then(success => {
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('Verification failed:', error);
    process.exit(1);
  });