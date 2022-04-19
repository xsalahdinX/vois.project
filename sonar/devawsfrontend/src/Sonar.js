
const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl : 'http://ec2-44-193-9-215.compute-1.amazonaws.com:9000',
    options: {
      'sonar.projectKey': 'salahdin',
      'sonar.projectVersion': '1.0',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': 'src',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  },
  () => process.exit()
)