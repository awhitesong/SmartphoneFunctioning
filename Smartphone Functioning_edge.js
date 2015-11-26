/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['0px', '76px', '257px', '501px', 'auto', 'auto'],
                            borderRadius: ["22px", "22px", "22px", "22px 22px"],
                            opacity: '1',
                            fill: ["rgba(25,25,25,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse8Copy3',
                            type: 'ellipse',
                            rect: ['120px', '96px', '5px', '4px', 'auto', 'auto'],
                            clip: 'rect(0px 5px 7px 0px)',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(249,249,249,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse8Copy2',
                            type: 'ellipse',
                            rect: ['324px', '74px', '5px', '4px', 'auto', 'auto'],
                            clip: 'rect(0px 5px 4px 51px)',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(249,249,249,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse8Copy',
                            type: 'ellipse',
                            rect: ['140px', '96px', '5px', '4px', 'auto', 'auto'],
                            clip: 'rect(0px 5px 7px 0px)',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(249,249,249,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse3',
                            type: 'ellipse',
                            rect: ['107px', '510px', '46px', '54px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(223,223,223,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Button',
                            type: 'ellipse',
                            rect: ['108px', '511px', '44px', '52px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,79,79,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse8',
                            type: 'ellipse',
                            rect: ['130px', '100px', '5px', '4px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(249,249,249,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Screen',
                            display: 'none',
                            type: 'rect',
                            rect: ['10px', '117px', '238px', '386px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(108,108,108,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'plainscreen',
                            display: 'block',
                            type: 'image',
                            rect: ['10px', '117px', '238px', '386px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"plainscreen.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['20px', '442px', '54px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Slider',
                            symbolName: 'Slider',
                            type: 'rect',
                            rect: ['19px', '169px', '521', '231', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'Rectangle16',
                            display: 'block',
                            type: 'rect',
                            rect: ['69px', '242px', '54px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(79,79,79,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'SettingsIcon',
                            symbolName: 'SetitngsIcon',
                            display: 'block',
                            type: 'rect',
                            rect: ['178', '317px', '70', '72', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle13',
                            type: 'rect',
                            rect: ['33px', '73px', '27px', '4px', 'auto', 'auto'],
                            fill: ["rgba(79,79,79,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'SettingsDisplay5',
                            symbolName: 'SettingsDisplay',
                            display: 'none',
                            type: 'rect',
                            rect: ['9px', '117px', '238', '386', 'auto', 'auto']
                        },
                        {
                            id: 'ToggleOn2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['140px', '196px', '95px', '26px', 'auto', 'auto'],
                            borderRadius: ["4px", "4px", "4px", "4px 4px"],
                            fill: ["rgba(0,0,0,0)",im+"ToggleOn.png",'0px','0px']
                        },
                        {
                            id: 'ToggleOn2',
                            display: 'none',
                            type: 'image',
                            rect: ['140px', '254px', '95px', '26px', 'auto', 'auto'],
                            borderRadius: ["4px", "4px", "4px", "4px 4px"],
                            fill: ["rgba(0,0,0,0)",im+"ToggleOn.png",'0px','0px']
                        },
                        {
                            id: 'ToggleOff2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['140px', '254px', '95px', '26px', 'auto', 'auto'],
                            borderRadius: ["4px", "4px", "4px", "4px 4px"],
                            fill: ["rgba(0,0,0,0)",im+"ToggleOff.png",'0px','0px']
                        },
                        {
                            id: 'ToggleOff2',
                            display: 'none',
                            type: 'image',
                            rect: ['140px', '196px', '95px', '26px', 'auto', 'auto'],
                            borderRadius: ["4px", "4px", "4px", "4px 4px"],
                            fill: ["rgba(0,0,0,0)",im+"ToggleOff.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle14',
                            type: 'rect',
                            rect: ['33px', '70px', '27px', '2px', 'auto', 'auto'],
                            fill: ["rgba(62,10,10,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Bluetooth2',
                            symbolName: 'Bluetooth2',
                            display: 'none',
                            type: 'rect',
                            rect: ['153px', '51px', '63', '19', 'auto', 'auto']
                        },
                        {
                            id: 'Bluetooth2Copy2',
                            symbolName: 'Bluetooth2',
                            display: 'none',
                            type: 'rect',
                            rect: ['153px', '51px', '63', '19', 'auto', 'auto']
                        },
                        {
                            id: 'Message',
                            symbolName: 'Message',
                            display: 'none',
                            type: 'rect',
                            rect: ['9px', '119px', '238', '381', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.01837']]
                        },
                        {
                            id: 'Dialpad2',
                            symbolName: 'Dialpad',
                            display: 'none',
                            type: 'rect',
                            rect: ['11px', '117px', '238', '386', 'auto', 'auto']
                        },
                        {
                            id: 'clr',
                            symbolName: 'clr',
                            display: 'none',
                            type: 'rect',
                            rect: ['178', '416', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num0',
                            symbolName: 'num0',
                            display: 'none',
                            type: 'rect',
                            rect: ['96', '358', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'Call',
                            symbolName: 'Call',
                            display: 'none',
                            type: 'rect',
                            rect: ['96', '410', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num4',
                            symbolName: 'num4',
                            display: 'none',
                            type: 'rect',
                            rect: ['20', '248', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num5',
                            symbolName: 'num5',
                            display: 'none',
                            type: 'rect',
                            rect: ['107', '254', '54', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num6',
                            symbolName: 'num6',
                            display: 'none',
                            type: 'rect',
                            rect: ['180', '258', '70', '42', 'auto', 'auto']
                        },
                        {
                            id: 'num7',
                            symbolName: 'num7',
                            display: 'none',
                            type: 'rect',
                            rect: ['14', '306', '78', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num8',
                            symbolName: 'num8',
                            display: 'none',
                            type: 'rect',
                            rect: ['96', '306', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num9',
                            symbolName: 'num9',
                            display: 'none',
                            type: 'rect',
                            rect: ['180', '306', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num2',
                            symbolName: 'num2',
                            display: 'none',
                            type: 'rect',
                            rect: ['89px', '196px', '78', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num3',
                            symbolName: 'num3',
                            display: 'none',
                            type: 'rect',
                            rect: ['178', '196', '70', '52', 'auto', 'auto']
                        },
                        {
                            id: 'num1',
                            symbolName: 'num1',
                            display: 'none',
                            type: 'rect',
                            rect: ['14px', '196px', '78', '52', 'auto', 'auto']
                        },
                        {
                            id: 'Phone',
                            type: 'text',
                            rect: ['14px', '137px', '232px', '32px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: right;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(241,241,241,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Calling3',
                            symbolName: 'Calling',
                            display: 'none',
                            type: 'rect',
                            rect: ['10px', '195px', '238', '306', 'auto', 'auto'],
                            transform: [[],[],[],['1.0084','1.00981']]
                        },
                        {
                            id: 'End',
                            symbolName: 'End',
                            display: 'none',
                            type: 'rect',
                            rect: ['28', '442', '207', '41', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '255px', '999px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ToggleOff2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid468",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Message}",
                            'none',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ToggleOn2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid92",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid495",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid484",
                            "left",
                            0,
                            0,
                            "linear",
                            "${num1}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid494",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid449",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid450",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Bluetooth2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "top",
                            0,
                            0,
                            "linear",
                            "${num2}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid490",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid98",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            '238px',
                            '238px'
                        ],
                        [
                            "eid488",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid533",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ToggleOn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid530",
                            "display",
                            0,
                            0,
                            "linear",
                            "${End}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            '117px',
                            '117px'
                        ],
                        [
                            "eid440",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Slider}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid445",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid446",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Bluetooth2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Calling3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid441",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid489",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid528",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Calling3}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid485",
                            "left",
                            0,
                            0,
                            "linear",
                            "${num2}",
                            '89px',
                            '89px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            '1',
                            '1'
                        ],
                        [
                            "eid516",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Calling3}",
                            '1.0084',
                            '1.0084'
                        ],
                        [
                            "eid451",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2Copy2}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid251",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plainscreen}",
                            '117px',
                            '117px'
                        ],
                        [
                            "eid244",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ToggleOff2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid534",
                            "display",
                            500,
                            0,
                            "linear",
                            "${SettingsIcon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid452",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2Copy2}",
                            '51px',
                            '51px'
                        ],
                        [
                            "eid44",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            'rgba(223,223,223,1.00)',
                            'rgba(223,223,223,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            'rgba(108,108,108,1.00)',
                            'rgba(108,108,108,1.00)'
                        ],
                        [
                            "eid527",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Calling3}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid240",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SettingsDisplay5}",
                            '117px',
                            '117px'
                        ],
                        [
                            "eid487",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Dialpad2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid492",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid496",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid499",
                            "display",
                            0,
                            0,
                            "linear",
                            "${clr}",
                            'none',
                            'none'
                        ],
                        [
                            "eid491",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid498",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num0}",
                            'none',
                            'none'
                        ],
                        [
                            "eid170",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid254",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            'none',
                            'none'
                        ],
                        [
                            "eid497",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Call}",
                            'none',
                            'none'
                        ],
                        [
                            "eid483",
                            "top",
                            0,
                            0,
                            "linear",
                            "${num1}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid239",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SettingsDisplay5}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid524",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Calling3}",
                            '1.00981',
                            '1.00981'
                        ],
                        [
                            "eid173",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '510px',
                            '510px'
                        ],
                        [
                            "eid253",
                            "left",
                            0,
                            0,
                            "linear",
                            "${plainscreen}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid105",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Screen}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid480",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Dialpad2}",
                            '117px',
                            '117px'
                        ],
                        [
                            "eid442",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2}",
                            '51px',
                            '51px'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plainscreen}",
                            'block',
                            'block'
                        ],
                        [
                            "eid493",
                            "display",
                            0,
                            0,
                            "linear",
                            "${num7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SettingsDisplay5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid455",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SettingsDisplay5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid481",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Dialpad2}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid152",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Slider}",
                            '19px',
                            '-285px'
                        ],
                            [ "eid453", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Bluetooth2Copy2}', [] ] ],
                            [ "eid454", "trigger", 1500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bluetooth2Copy2}', [] ] ]
                    ]
                }
            },
            "Slider": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Apps1',
                            rect: ['249px', '140px', '0px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Apps1.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps1.png', '0px', '0px']
                        },
                        {
                            rect: ['55px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps2.png', '0px', '0px']
                        },
                        {
                            rect: ['110px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps3.png', '0px', '0px']
                        },
                        {
                            rect: ['165px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '78px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps5.png', '0px', '0px']
                        },
                        {
                            rect: ['110px', '78px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps6.png', '0px', '0px']
                        },
                        {
                            rect: ['165px', '78px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps7.png', '0px', '0px']
                        },
                        {
                            rect: ['425px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps8.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '165px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps9.png', '0px', '0px']
                        },
                        {
                            rect: ['115px', '165px', '41px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps11',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps11.png', '0px', '0px']
                        },
                        {
                            rect: ['55px', '165px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps122',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps12.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '40px', '212px', '32px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(243, 243, 243);\">Calender ​ &nbsp; &nbsp; Photos &nbsp; &nbsp; &nbsp; Camera &nbsp; &nbsp; &nbsp; Videos</span><br></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '124px', '212px', '22px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(247, 247, 247);\">Reminder &nbsp; Messages &nbsp;Google Maps &nbsp; Maps</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(247, 247, 247);\"> &nbsp;</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(245, 245, 245);\">&nbsp;Youtube &nbsp; &nbsp; &nbsp; Safari &nbsp; &nbsp; &nbsp; &nbsp;Weather &nbsp; &nbsp; Settings&nbsp;</span></p>',
                            rect: ['0px', '209px', '211px', '22px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1)', '100', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['310px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps13',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps13.png', '0px', '0px']
                        },
                        {
                            rect: ['55px', '78px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps14',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps14.png', '0px', '0px']
                        },
                        {
                            rect: ['475px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps15',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps15.png', '0px', '0px']
                        },
                        {
                            rect: ['365px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps16',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps16.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 10px; font-weight: 100; color: rgb(239, 239, 239);\">&nbsp; &nbsp; &nbsp;TWC &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Yahoo! &nbsp; &nbsp; &nbsp; Mapquest &nbsp; &nbsp;Clock</span></p>',
                            rect: ['301px', '41px', '220px', '22px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'rect',
                            id: 'Settings',
                            symbolName: 'Settings1',
                            rect: ['165', '165', '46', '41', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '521px', '231px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Settings": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '46px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Apps10',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Apps10.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    labels: {
                        "Label 1": 0
                    },
                    data: [

                    ]
                }
            },
            "Settings1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Settings',
                            symbolName: 'Settings',
                            rect: ['0px', '0px', '46', '41', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SetitngsIcon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '72px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(108,108,108,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SettingsDisplay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '238px', '386px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,1)', [270, [['rgba(6,6,6,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '182px', '238px', '4px', 'auto', 'auto'],
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(210,205,244,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['8px', '137px', '125px', '26px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: left;\"><span style=\"color: rgb(248, 248, 248);\"><font face=\"Lucida Sans Unicode, Lucida Grande, sans-serif\"><span style=\"font-size: 20px;\">Bluetooth</span></font><font face=\"Lucida Sans Unicode, Lucida Grande, sans-serif\">​</font></span></p>',
                            id: 'Text4Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['0px', '120px', '238px', '4px', 'auto', 'auto'],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(210,205,244,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Settings',
                            rect: ['0px', '27px', '238px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Settings.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Head',
                            rect: ['0px', '0px', '238px', '14px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Head.jpg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '78px', '125px', '26px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: left;\"><span style=\"color: rgb(248, 248, 248);\">&nbsp; &nbsp;</span><span style=\"color: rgb(248, 248, 248); font-family: \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;\">Wi-fi</span></p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '238px', '386px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid235",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Settings}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid236",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Settings}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid189",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Settings}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid188",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Settings}",
                            '238px',
                            '238px'
                        ]
                    ]
                }
            },
            "Bluetooth1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '19px', 'auto', 'auto'],
                            id: 'Bluetooth1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Bluetooth1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '44px', '19px', 'auto', 'auto'],
                            id: 'Bluetooth1Copy',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Bluetooth1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '19px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid404",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${Bluetooth1}",
                            [[22, 9.5, 0, 0, 0, 0,0],[22, -34.5, 0, 0, 0, 0,44]]
                        ],
                        [
                            "eid277",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bluetooth1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bluetooth1Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid405",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${Bluetooth1Copy}",
                            [[22, 9.5, 0, 0, 0, 0,0],[22, -34.5, 0, 0, 0, 0,44]]
                        ]
                    ]
                }
            },
            "Bluetooth2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '63px', '19px', 'auto', 'auto'],
                            id: 'Bluetooth2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Bluetooth2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '19px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid444",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Bluetooth2}",
                            '0px',
                            '-46px'
                        ],
                        [
                            "eid278",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bluetooth2}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Bluetooth3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '95px', '23px', 'auto', 'auto'],
                            id: 'Bluetooth3',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Bluetooth3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '95px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid279",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bluetooth3}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Message": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Messages',
                            rect: ['0px', '15px', '238px', '366px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Messages.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Head2',
                            rect: ['0px', '0px', '238px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Head.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '238px', '381px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Dialpad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Dialpad',
                            rect: ['0px', '16px', '238px', '370px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Dialpad.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Head3',
                            rect: ['0px', '0px', '238px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Head.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '238px', '386px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '78px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle17',
                            opacity: '0.017094017094017',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '78px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '78px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle18',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '78px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle19',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle20',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '54px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle21',
                            opacity: '0.034188034188034',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '42px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle22',
                            opacity: '0.025641025641026',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '78px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle23',
                            opacity: '0.034188034188034',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '78px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle24',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle25',
                            opacity: '0.0085470085470085',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "num0": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle26',
                            opacity: '0.034188034188034',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Call": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle27',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "clr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '52px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle28',
                            opacity: '0.025641025641026',
                            type: 'rect',
                            fill: ['rgba(79,79,79,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Calling": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Calling2',
                            rect: ['0px', '0px', '238px', '306px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Calling.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '238px', '306px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "End": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '207px', '41px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle30',
                            opacity: '0.017094017094017',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Smartphone%20Functioning_edgeActions.js");
})("EDGE-446630401");
