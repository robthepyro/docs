const fs = require('fs')
const { isAbsolute } = require('path')

const mapFiles = (root,type) => {
  return fs.readdirSync(`./docs/${root}/${type}`)
    .filter( f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map( f => f.replace('.mdx','').replace('.md', '') )
    .map( f => {
      const parts = f.split('-')
      if (Number.isInteger(parseInt(parts[0],10))) {
        parts.shift()
        return parts.join('-')
      }
      return f
    })
    .map( f => `${root}/${type}/${f}`)
}

const hardware = [
  'hardware/home',
  {
    type: 'category',
    collapsible: true,
    collapsed: false,
    label: 'ESP32',
    items: [
      'hardware/esp32/about-esp32',
      {
        type: 'category',
        label: 'ESP32 Quickstart',
        collapsible: true,
        collapsed: false,
        items: [
          {
            type: 'autogenerated',
            dirName: 'hardware/esp32/esp32-quickstart', 
          },
        ]
      },
    ],
  },
  {
    type: 'category',
    collapsible: true,
    collapsed: false,
    label: 'nRF91 Quickstart',
    items: mapFiles('hardware','nrf91-quickstart'),
  },
  {
    type: 'category',
    label: 'Virtual Device Quickstart',
    items: mapFiles('hardware','virtual-device-quickstart'),
  },
]

const firmware = [
  'firmware/home',
  'firmware/creating-an-app',
  'firmware/speedrun',
  {
    type: 'category',
    label: 'Logging',
    items: mapFiles('firmware','logging'),
  },
]

const reference = [
  'reference/home',
  'reference/api-docs',
  {
    type: 'category',
    label: "Zephyr SDK",
    items: [
      //'reference/coming-soon',
      'reference/zephyr/getting-started',
      { 'Samples': mapFiles('reference', 'zephyr/samples') }
    ],
  },
  //"ESP-IDF SDK" : ['references/coming-soon'],
  {
    type: 'category',
    label: 'Command Line Tools',
    items:  [
      { 'goliothctl': mapFiles('reference','goliothctl') },
      { 'coap' : mapFiles('reference','coap') },
    ],
  },
]



const concepts = [
  'concepts/home',
  'concepts/fundamentals',
  'concepts/device-sdks',
  'concepts/device-services',
  'concepts/console',
  'concepts/cli',
]

module.exports = {
  reference,
  concepts,
  hardware,
  firmware
};
