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
    function setColor(event: ChangeEvent<HTMLInputElement> | null = null, color: string = event ? event.target.value : initialColor) {
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
        <>
            <a href="https://github.com/raingrain/color-picker-react-ts" target="_blank" className="github-link">
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <path
                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    ></path>
                </svg>
            </a>
            <div className="left-line"></div>
            <div className="right-line"></div>
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
        </>
    );
}

export default App;
