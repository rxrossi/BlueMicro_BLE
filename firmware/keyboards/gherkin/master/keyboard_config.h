/*
Copyright 2018 <Pierre Constantineau>

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
#ifndef KEYBOARD_CONFIG_H
#define KEYBOARD_CONFIG_H
#include "hardware_variants.h"
#define HARDWARE_MAPPING  BLUEMICROV2_1A  // note only the BlueMicro840 fits on the corne.
#include "breakout_mapping.h"

#define KEYBOARD_SIDE MASTER


#define DEVICE_NAME_R                         "GherkinBLE_R"                          /**< Name of device. Will be included in the advertising data. */
#define DEVICE_NAME_L                         "GherkinBLE_L"                          /**< Name of device. Will be included in the advertising data. */
#define DEVICE_NAME_M                         "GherkinBLE"                          /**< Name of device. Will be included in the advertising data. */

#define DEVICE_MODEL                        "GherkinBLE_V1"                          /**< Name of device. Will be included in the advertising data. */

#define MANUFACTURER_NAME                   "40Percent.Club"                      /**< Manufacturer. Will be passed to Device Information Service. */
#define TIME_TILL_HOLD 300

/* HARDWARE DEFINITION*/
/* key matrix size */
#define MATRIX_ROWS 5
#define MATRIX_COLS 6

#define MATRIX_ROW_PINS {B6, B2, B3, B1, F7 }
#define MATRIX_COL_PINS {D0, D4, C6, D7, E6, B4 }
#define UNUSED_PINS {}
#define BACKLIGHT_LED_PIN B5 

#define BACKLIGHT_PWM_ON 1   
/* COL2ROW or ROW2COL */
#define DIODE_DIRECTION COL2ROW

#define DEBOUNCETIME 20

#define KEYMAP( \
	 K00,   K01,   K02,   K03,   K04,   K05,   K10,   K11,   K12,   K13 , \
	 K14,   K15,   K20,   K21,   K22,   K23,   K24,   K25,   K30,   K31 , \
	 K32,   K33,   K34,   K35,   K40,   K41,   K42,   K43,   K44,   K45   \
) { \
	{ K00,   K01,   K02,   K03,   K04,   K05 }, \
	{ K10,   K11,   K12,   K13,   K14,   K15 }, \
	{ K20,   K21,   K22,   K23,   K24,   K25 }, \
	{ K30,   K31,   K32,   K33,   K34,   K35 }, \
	{ K40,   K41,   K42,   K43,   K44,   K45 }  \
}



#endif /* KEYBOARD_CONFIG_H */
