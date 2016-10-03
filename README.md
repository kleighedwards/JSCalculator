# Skill Distillery Week 11 Project

## Making A Basic Calculator With JavaScript

### Project Overview
  - This program constructs a calculator using only JavaScript and minor CSS for styling.
  - The user may use the interface to add, subtract, divide, and multiply.
    - The "+/-" and "%" options, however, are nonfunctioning.
  - Selecting "C" will Clear the display and wipe all current operations stored in memory.
  - The user may use decimals if they choose. The program will prevent them from entering multiple
    decimal points in the same number. 
  - The user may also chain mathmatical operations.
    - I.E. If the user were to enter 3 + 3 + The display would show 6 before continuing.
    - This functionality works so long as the user chains like operations. For instance, if the user adds and 
      subtracts within the same chain, the program will log the number currently in the display and perform the 
      operation on it prematurely. If the user were to chain like operations and select the Equals option before
      switching their desired operand, the program will function as expected.
        - For example: 2 + 2 + (Display 4) 2 = 6
        -              6 - 2 - (Display 4) 2 = 2
