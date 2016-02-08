module.exports = {
  'plugin': 'keepfast-contrib-yslow',
  'sensors': {
    'score': {
      'label': 'YSlow Score',
      'criteria': [{
        'plataform': 'all',
        'expected': '90',
        'condition': '>',
        'result': true,
        'unit': ''
      }]
    },
    'loadTime': {
      'label': 'Page load time',
      'criteria': [{
        'plataform': 'all',
        'expected': '4000',
        'condition': '<',
        'result': true,
        'unit': 'ms'
      }]
    }
  }
};
