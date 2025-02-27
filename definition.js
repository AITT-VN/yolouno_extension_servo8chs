const Servo8chsBlock = '#ff960d';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_motion_kit/images/';

Blockly.Blocks["servo8chs_write_angle"] = {
  init: function () {
    this.jsonInit({
      colour: Servo8chsBlock,
      nextStatement: null,
      message0: Blockly.Msg.BLOCK_SERVO8CHS_WRITE_MESSAGE0,
      tooltip: Blockly.Msg.BLOCK_SERVO8CHS_WRITE_TOOLTIP,
      previousStatement: null,
      args0: [
        { type: "input_value", name: "angle", check: "Number" },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["MS1", "0"],
            ["MS2", "1"],
            ["MS3", "2"],
            ["MS4", "3"],
            ["MS5", "4"],
            ["MS6", "5"],
            ["MS7", "6"],
            ["MS8", "7"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'servo.png',
          "width": 30,
          "height": 30,
          "alt": "*",
          "flipRtl": false
        },
        { type: "input_value", name: "speed", check: "Number" },
        {type: "input_dummy"},
        {type: "input_dummy"},
      ],
      helpUrl: null,
    });
  },
};

Blockly.Python['servo8chs_write_angle'] = function (block) {
  Blockly.Python.definitions_['import_yolo'] = 'from yolo_uno import *';
  Blockly.Python.definitions_['import_servo8chs'] = 'from servo8chs import *';
  var value_output = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = "sv.set_servo_position("+ dropdown_pin + "," + value_output +", "+ value_speed+ ")\n";
  return code;
  
};


Blockly.Blocks["servo8chs_micro_angle"] = {
  init: function () {
    this.jsonInit({
      colour: Servo8chsBlock,
      nextStatement: null,
      message0: Blockly.Msg.BLOCK_SERVO8CHS_WRITE_MICRO_MESSAGE0,
      tooltip: Blockly.Msg.BLOCK_SERVO8CHS_WRITE_MICRO_TOOLTIP,
      previousStatement: null,
      args0: [
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            ["MS1", "0"],
            ["MS2", "1"],
            ["MS3", "2"],
            ["MS4", "3"],
            ["MS5", "4"],
            ["MS6", "5"],
            ["MS7", "6"],
            ["MS8", "7"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'servo.png',
          "width": 30,
          "height": 30,
          "alt": "*",
          "flipRtl": false
        },        
        {type: "input_dummy"},
      ],
      helpUrl: null,
    });
  },
};

Blockly.Python['servo8chs_micro_angle'] = function (block) {
  Blockly.Python.definitions_['import_yolo'] = 'from yolo_uno import *';
  Blockly.Python.definitions_['import_servo8chs'] = 'from servo8chs import *';
  var value_output = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = "sv.move_servo_position("+ dropdown_pin + "," + value_output + ")\n";
  return code;
  
};

Blockly.Blocks['servo8chs360_write'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "servo8chs360_write",
        message0: Blockly.Msg.BLOCK_SERVO8CHS360_WRITE_MESSAGE0,
        "tooltip": Blockly.Msg.BLOCK_SERVO8CHS360_WRITE_TOOLTIP,
        "args0": [
          {
            type: "field_dropdown",
            name: "pin",
            options: [
              ["MS1", "0"],
              ["MS2", "1"],
              ["MS3", "2"],
              ["MS4", "3"],
              ["MS5", "4"],
              ["MS6", "5"],
              ["MS7", "6"],
              ["MS8", "7"],
            ],
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'servo.png',
            "width": 30,
            "height": 30,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        colour: Servo8chsBlock
      }
    );
  }
};

Blockly.Python['servo8chs360_write'] = function (block) {
  Blockly.Python.definitions_['import_yolo'] = 'from yolo_uno import *';
  Blockly.Python.definitions_['import_servo8chs'] = 'from servo8chs import *';
  var value_output = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = "sv.set_servo("+ dropdown_pin + "," + value_output + ")\n";
  return code;
};
