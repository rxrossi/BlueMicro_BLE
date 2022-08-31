/*
Copyright 2020-2021 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#ifndef HARDWARE_CONFIG_H
#define HARDWARE_CONFIG_H
#define KEYBOARD_SIDE RIGHT
#include "hardware_variants.h"

/* HARDWARE DEFINITION*/
/* key matrix size */
#define MATRIX_ROWS 7
#define MATRIX_COLS 6

#define MATRIX_ROW_PINS {29, 2, 47, 45, 43, 10, 9 } // { F5, F6, F7, B1, B3, B2, B6 }

#if KEYBOARD_SIDE == LEFT
#define MATRIX_COL_PINS {38, 36, 11, 32, 24, 22} // { D4, C6, D7, E6, B4, B5 }
#else
#define MATRIX_COL_PINS {22, 24, 32, 11, 36, 38} // { D4, C6, D7, E6, B4, B5 }
#endif

// Considering left side as the side with battery GND

// ROW on the left side, ESC on the bottom, the "key5" on the top (6th pin)
// COL on the right side, with the key "key5" being at the top (6th key)
#define UNUSED_PINS {}

/* COL2ROW or ROW2COL */
#define DIODE_DIRECTION COL2ROW

#define BACKLIGHT_PWM_ON 0
#define WS2812B_LED_PIN 6

#define WS2812B_LED_COUNT 12
#define WS2812B_LED_ON 0 // LEDs are disabled by default
 

 #define ARDUINO_NICE_NANO 1 // used in debug_cli.cpp to bypass 0.14 and 0.16 that are directly connected to 0.18 (reset)
 
#define BATTERY_TYPE BATT_LIPO
#define VBAT_PIN  4
#define VCC_PIN 13
#define VCC_POLARITY_ON 0
       #define  STATUS_BLE_LED_PIN  15  //blue = 0.15
     //#define  STATUS_KB_LED_PIN 0  //no RED LED
 
    
#endif /* HARDWARE_CONFIG_H */
