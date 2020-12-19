(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,s=u["".concat(l,".").concat(m)]||u[m]||p[m]||b;return a?n.a.createElement(s,c(c({ref:t},o),{},{components:a})):n.a.createElement(s,c({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),b=(a(0),a(113)),l={id:"hardware",title:"Supported Processors",sidebar_label:"Supported Processors",slug:"/hardware"},c={unversionedId:"hardware",id:"hardware",isDocsHomePage:!1,title:"Supported Processors",description:"Target CPU: Nordic Semiconductor nRF52832 and nRF52840",source:"@site/docs/supported_hardware.md",slug:"/hardware",permalink:"/docs/hardware",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/supported_hardware.md",version:"current",sidebar_label:"Supported Processors",sidebar:"someSidebar",previous:{title:"A Bluetooth First Firmware",permalink:"/docs/bluetooth_firmware"},next:{title:"Keyboards",permalink:"/docs/keyboards"}},i=[{value:"Target CPU: Nordic Semiconductor nRF52832 and nRF52840",id:"target-cpu-nordic-semiconductor-nrf52832-and-nrf52840",children:[]},{value:"Available Modules",id:"available-modules",children:[]},{value:"Available Breakout Boards",id:"available-breakout-boards",children:[]},{value:"Keyboards - Using Breakout Boards",id:"keyboards---using-breakout-boards",children:[]},{value:"Keyboards - Using directly in the Keyboard",id:"keyboards---using-directly-in-the-keyboard",children:[]},{value:"What about Nordic Semiconductor&#39;s...",id:"what-about-nordic-semiconductors",children:[{value:"NRF52840",id:"nrf52840",children:[]},{value:"NRF52810",id:"nrf52810",children:[]},{value:"NRF51822",id:"nrf51822",children:[]},{value:"NRF52833",id:"nrf52833",children:[]},{value:"NRF5340",id:"nrf5340",children:[]}]}],o={rightToc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"target-cpu-nordic-semiconductor-nrf52832-and-nrf52840"},"Target CPU: Nordic Semiconductor nRF52832 and nRF52840"),Object(b.b)("p",null,"With the nRF52, you run all of your keyboard firmware code directly on the nRF52 and no external MCU is used or required for Bluetooth functionality!"),Object(b.b)("p",null,"For more information on the NRF52832, see the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://infocenter.nordicsemi.com/pdf/nRF52832_PS_v1.4.pdf"}),"detailed 553 pages product specification")),Object(b.b)("p",null,"The BlueMicro firmware uses the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/introduction"}),"Adafruit nrf52 feather")," bootloader, libraries and allows for the following features:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Feature"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"nRF52832 Details"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Comments"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.4 GHz transceiver"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"-96 dBm sensitivity in Bluetooth\xae low energy mode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"-20 to +4 dBm TX power, configurable in 4 dB steps"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"5.3 mA peak current in TX (0 dBm)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"5.4 mA peak current in RX"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ARM\xae Cortex\xae-M4"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"32-bit processor with FPU, 64 MHz"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Memory"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"512 kB flash/64 kB RAM"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Partitionned between softdevice, bootloader and DFU regions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Power management"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1.7 V\u20133.6 V supply voltage range"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LiPo Batteries require 3.3V regulator. 5V Not supported.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"58 \u03bcA/MHz running from flash memory"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"3.7mA@64MHz")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"51.6 \u03bcA/MHz running from flash memory"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"3.3mA@64MHz")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Digital IO"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"32 general purpose I/O pins"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Analog IO"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"12-bit, 200 ksps ADC - 8 configurable channels with programmable gain"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1 Used for battery Monitoring")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PWM"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"3x 4-channel pulse width modulator (PWM) unit with EasyDMA"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enables backlight LEDs PWM modulation")))),Object(b.b)("h2",{id:"available-modules"},"Available Modules"),Object(b.b)("p",null,"There are several modules available that uses the NRF52832 or nRF52840 SoC.\nFor example, the reference design for the BlueMicro Hardware, the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/downloads"}),"Adafruit NRF52"),", uses the MDBT42Q module from Raytac.  Over the last few years, many modules have been made available, in various form factors and available at different price points."),Object(b.b)("p",null,"Some of these modules have FCC Certifications while others don't."),Object(b.b)("h2",{id:"available-breakout-boards"},"Available Breakout Boards"),Object(b.b)("p",null,"To be able to be used as processor for a Custom Keyboard, the NRF52832/40 module must be installed on a breakout board that's compatible to be inserted in the custom keyboard in question."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Breakout Board"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Electrical Connection"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Physical Dimensions"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Module"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Compatible with"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Adafruit NRF52"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Adafruit Feather"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"23mm x 51mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MDBT42Q"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Handwired")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BlueMicro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arduino Pro Micro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"22mm x 68mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"E73-2G4M04S1B"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Many Custom boards using the Pro Micro but with sufficient length")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BlueMicro840"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arduino Pro Micro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"20mm x 33mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"E73-2G4M04S1C"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Many Custom boards using the Pro Micro")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BlueMacro840"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arduino Micro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"20mm x 48mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"E73-2G4M04S1C"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Many Custom boards using the Micro")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrfmicro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arduino Pro Micro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"18mm x 33mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"E73-2G4M04S1C"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Many Custom boards using the Pro Micro")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Nice!Nano"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arduino Pro Micro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"18mm x 33mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52840 chip"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Many Custom boards using the Pro Micro")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BLE Phage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arduino Pro Micro"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"18mm? x 33mm?"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MDBT42Q"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Most custom boards using the Pro Micro")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4x4 Backpack"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"40percent.club 4x4"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"76mm x 76mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"E73-2G4M04S1B"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Any configuration from 4x4 to 4x16")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5x5 Backpack"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"40percent.club 5x5"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"95mm x 95mm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"E73-2G4M04S1B"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Any configuration from 5x5 to 5x15")))),Object(b.b)("h2",{id:"keyboards---using-breakout-boards"},"Keyboards - Using Breakout Boards"),Object(b.b)("p",null,"The list of keyboards that can use the NRF52 processors is countless.  However, when implemented with modules and breakout boards, compatibility most often comes down to the electrical connection and the physical dimensions available.\nFor example, the BlueMicro hardware (nrf52832) has an electrical connection that's compatible with the Pro Micro, but its physical dimensions is about twice as long; limiting its use to keyboards with sufficient room in line with the Pro Micro board."),Object(b.b)("p",null,"Other boards uses the Teensy electrical connection to interface the ATMega32U4 to the rest of the keyboard.  Because of the row of electrical connections at the end of the Teensy board and the Keep-Out Area required around 2.4GHz antennas, it is very unlikely that any NRF52 breakout boards will be able to be compatible with the Teensy."),Object(b.b)("p",null,"Finally, since the main goal of switching to a nrf52 processor is to convert a keyboard from wired to wireless, physical space for a battery is the next consideration for compatibility with a specific keyboard."),Object(b.b)("h2",{id:"keyboards---using-directly-in-the-keyboard"},"Keyboards - Using directly in the Keyboard"),Object(b.b)("p",null,"It's possible to design a keyboard to use the NRF52 chip or a NRF52 module directly on the Keyboard PCB.  This allows the most flexibility in using the available GPIOs and adding any other functionality that cannot be implemented on a breakout board due to the limited space available."),Object(b.b)("p",null,"One such example is the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://imgur.com/a/p3ZXnPM#wDFujG6"}),"Blue Ortho"),"."),Object(b.b)("h2",{id:"what-about-nordic-semiconductors"},"What about Nordic Semiconductor's..."),Object(b.b)("h3",{id:"nrf52840"},"NRF52840"),Object(b.b)("p",null,"This is a relatively new chip that supports on-chip USB.  There is more Flash (1Mb), more RAM (256kb), more GPIOs (48 instead of 32), can run with 5V, and also has a USB 2.0 controller.   Wired HID functionality will be available through the use of the TinyUSB Library.  Adafruit has a couple of versions hardware that uses this chip.  They have extended the library to support this new chip.  The BlueMicro firmware supports this chip."),Object(b.b)("h3",{id:"nrf52810"},"NRF52810"),Object(b.b)("p",null,"This chip is very similar to the NRF52832 but has less features, flash space and ram. There are fewer modules available with the NRF52810 than with the NRF52832; often at higher prices due to their limited availability.  The NRF52 Adafruit library does not support this chip.  As such, it's recommended to go directly to the NRF52832."),Object(b.b)("h3",{id:"nrf51822"},"NRF51822"),Object(b.b)("p",null,"The NRF51822 is an older device that uses a 32-bit ARM Cortex M0 CPU core.  Adafruit does have a NRF51 feather, however, it does not support the NRF52 libraries.  The NRF51 based Bluefruit boards run as modules that you connect to via an external MCU sending AT style commands over SPI or UART. Not recommended."),Object(b.b)("h3",{id:"nrf52833"},"NRF52833"),Object(b.b)("p",null,"This is a new chip that sits between the 832 and 840.  It's extended temperature range makes it attractive for commercial and industrial applications. Due to comparable features with the nrf52840 and their availabilities, most will select the NRF52840 instead of the NRF52833."),Object(b.b)("h3",{id:"nrf5340"},"NRF5340"),Object(b.b)("p",null,"This is the newest chip from Nordic Semicomductors.  It has been announced November 2019.  Unlike previous generation chips, it has 2 cores: A 64 MHz network core for handling radio communications and an 64MHz or 128 MHz application core.  Both cores are ARM Cortex M33.  Chips aren't available for sale yet.  It's not clear if the library will support this chip."),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"http://bluemicro.jpconstantineau.com/img/BlueMicro_Hardware.jpg",alt:"BlueMicro"}))),Object(b.b)("p",null,"Top Row: 5x5Backpack, 4x4Backpack"),Object(b.b)("p",null,"Bottom Row: BlueMicro V2.0,  BlueMicro V1.0, BlueNano V2.0, BlueNano V1.0, Pro Micro (For Reference)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Board Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Chip"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Bootloader"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.adafruit.com/product/3406"}),"Adafruit nRF52 Feather")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The original from Adafruit!"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/EByte_E73"}),"BlueMicro V1.0")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Serial TX/RX routed through D2 and D3; Designed for the ErgoTravel; Tested and Gerber available"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/EByte_E73"}),"BlueMicro V1.1")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Compatible with more Keyboards - Serial TX/RX are routed separately; Tested and Gerber available"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/EByte_E73_Batt"}),"BlueMicro V2.0b")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Compatible with more Keyboards - Serial TX/RX are routed separately, LiPo Charger on board; Tested and Gerber available"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/EByte_E73_Batt_ErgoTravel"}),"BlueMicro V2.0c")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Serial TX/RX routed through D2 and D3; Designed for the ErgoTravel. LiPo Charger on Board with battery connection connected to RAW pin. Tested and Gerber available."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/4x4_backpack/4x4_backpack"}),"4x4 Backpack")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"For use with ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.40percent.club/2018/01/4x4x4x4x4.html"}),"40percent.club 4x4 Boards"),". Uses a CR2032 Battery."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/4x4_backpack/4x4_platform"}),"4x4 Platform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"For use with ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.40percent.club/2018/01/4x4x4x4x4.html"}),"40percent.club 4x4 Boards"),". Uses a rechargeable Battery, has a single RGB on board and has a few status LEDs and PWM driven LEDs. Has serial on board too!"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/4x4_backpack/4x4_backpack_nrf52840"}),"4x4 Backpack840")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"For use with ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.40percent.club/2018/01/4x4x4x4x4.html"}),"40percent.club 4x4 Boards"),". Uses a rechargeable  Battery, has a single RGB on board and has a few status LEDs and PWM driven LEDs.  Most importantly, it uses a nrf52840 module instead of a nrf52832 module."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jpconstantineau/NRF52-Board/tree/master/5x5_backpack/5x5_backpack"}),"5x5 Backpack")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"For use with ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.40percent.club/2018/04/5x5.html"}),"40percent.club 5x5 Boards"),". Uses a CR2032 Battery."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BLE Phage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(Compatible with even more Keyboards due to its small size - Serial USB and PoLi Charger on board)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://southpawdesign.net/products/blue-phage-basic?variant=8958741545020"}),"BLE Phage Basic")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(Compatible with even more Keyboards due to its small size - Serial TX/RX are routed separately)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52832 feather")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.adafruit.com/product/3406"}),"Adafruit nRF52840 Feather")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The updated nrf52 feather from Adafruit!"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52840"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nrf52840 feather express")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://store.jpconstantineau.com/#/group/bluemicro"}),"BlueMicro840")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Bluemicro based on the design of the nrfmicro.  Still being worked on..."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52840"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PCA10056")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://docs.nicekeyboards.com/#/nice!nano/"}),"nice!nano")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"uses the nRF52840 chip. Same size as the Pro Micro."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52840"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nice_nano")))))}d.isMDXComponent=!0}}]);