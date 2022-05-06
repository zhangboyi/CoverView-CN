import React from 'react';
import logo from '../assets/icons/logo.png'

const Info = () => {


    const fbMeta = `     <meta property="og:image" content="url of your image">`
    const twitterMeta = `<meta property="twitter:image" content="url of your image">
`

    return (
        <div className="md:p-20 bg-gray-100">



            <div className="flex md:flex-row flex-col justify-center">
                <div className="m-4 bg-white p-10 rounded-xl shadow-sm">
                    <h2 className="text-2xl my-2 font-semibold">如何与 meta tags 一起使用？</h2>
                    <p>在你网站的 head tag 中加入这段代码。</p>

                    <div className="bg-purple-100 border-2 border-gray-700 my-4 p-6 rounded text-gray-700 ">
                        <p>{fbMeta}</p>
                        <p>{twitterMeta}</p>
                    </div>

                    <span className="text-sm italic">不要忘记用你的图片网址替换内容</span>

                </div>




                <div className=" md:w-1/3 m-4 bg-white p-10 rounded-xl shadow-sm">
                    <h2 className="text-2xl my-2 font-semibold">我可以上传自定义图标或自己的图像吗？</h2>
                    <p className="">当然，在图标选项中找到 <span className="text-purple-400 font-semibold ">自定义</span> 并选中来上传自定义图标或自己的图像。</p>
                    <p className="text-sm my-2 italic">确保以 1:1 的比例上传图标/图像</p>
                </div>




            </div>


            <div className=" p-20 ">
                <div className="flex flex-col items-center">
                    <img src={logo} className="" alt="logo" />
                    <h1 className="text-2xl text-purple-400 ">Coverview</h1>
                </div>

                <h1 className="text-center md:text-6xl text-3xl font-extrabold text-gray-700 ">让为你的博客创建封面图片变得超级容易</h1>
                <a href="https://github.com/thedavidweng/CoverView-CN" target="_blank" rel="noreferrer" className="bg-gray-700 text-white p-2 px-6 rounded text-xl flex my-10 hover:bg-gray-800 mx-auto w-max">⭐ 在 Github 上点个星星</a>
            </div>

        </div>
    );
}

export default Info;