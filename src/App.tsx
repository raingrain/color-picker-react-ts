import "./App.scss";
import {ChangeEvent, useEffect, useRef} from "react";
import ClipboardJS from "clipboard";

function App() {

    // 初始颜色
    const initialColor = "#afc8ba";

    // 选择对应的dom节点
    // 背景
    // 注意useRef的泛型接口
    const pickerBody = useRef<HTMLDivElement>(null);
    // 调色盘
    const palette = useRef<HTMLInputElement>(null);
    // 十六进制颜色输出框
    const showColorInput = useRef<HTMLInputElement>(null);

    // 颜色设置函数
    // 没传入事件就初始化，不然就用调色盘的颜色
    // 注意event的类型
    function setColor(event: ChangeEvent<HTMLInputElement> | null = null, color: string = event ? event.target.value: initialColor) {
        pickerBody.current!.style.backgroundColor = color;
        showColorInput.current!.value = color;
    }

    // 初始化插件和整体颜色
    useEffect(() => {
        palette.current!.value = initialColor;
        // 绑定剪切插件
        new ClipboardJS("#copyBtn");
        setColor();
    }, []);

    // 调色盘发生input时的函数
    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        setColor(event);
    }

    return (
        <div ref={pickerBody} className="picker-body">
            <div className="picker-box">
                <h1 className="picker-title">Color Picker</h1>
                <div className="picker-inputs">
                    <input type="color" ref={palette} className="palette" onInput={handleInput}/>
                    <input type="text" ref={showColorInput} id="showColorInput" className="showColorInput"/>
                    {/*指向你要剪切的内容对应的dom节点*/}
                    <button data-clipboard-target="#showColorInput" id="copyBtn" className="copyBtn">
                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                            <path
                                d="M672 832 224 832c-52.928 0-96-43.072-96-96L128 160c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 576C768 788.928 724.928 832 672 832zM224 128C206.368 128 192 142.368 192 160l0 576c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L704 160c0-17.632-14.336-32-32-32L224 128z"
                                fill="#8a8a8a"></path>
                            <path
                                d="M800 960 320 960c-17.664 0-32-14.304-32-32s14.336-32 32-32l480 0c17.664 0 32-14.336 32-32L832 256c0-17.664 14.304-32 32-32s32 14.336 32 32l0 608C896 916.928 852.928 960 800 960z"
                                fill="#8a8a8a"></path>
                            <path
                                d="M544 320 288 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S561.696 320 544 320z"
                                fill="#8a8a8a"></path>
                            <path
                                d="M608 480 288.032 480c-17.664 0-32-14.336-32-32s14.336-32 32-32L608 416c17.696 0 32 14.336 32 32S625.696 480 608 480z"
                                fill="#8a8a8a"></path>
                            <path
                                d="M608 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S625.696 640 608 640z"
                                fill="#8a8a8a"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
