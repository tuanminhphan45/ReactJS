/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const Photo = () => {
    const [data, setData] = useState([]);
    // // cách 1 bằng json truyền thống
    // const fetchApi2 = async () => {
    //     const url = "https://picsum.photos/v2/list?limit=12";
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error(`Response status: ${response.status}`);
    //         }
    //         const json = await response.json();
    //         console.log(json);
    //         return json;
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // };
    // cách 2 bằng axios
    const [urlLimit, setUrlLimit] = useState(12);
    const fetchApi = async (urlLimit) => {
        const url = `https://picsum.photos/v2/list?limit=${urlLimit}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    useEffect(() => {
        fetchApi(urlLimit).then((data) => setData(data));
    }, [urlLimit]);
    // có 3 trg hợp dependency:
    //      + useEffect(function ,) để trống thì nó sẽ chạy liên tục
    //      + useEffect(function , []) để rỗng thì nó sẽ chạy 1 lần khi reload
    //      + + useEffect(function , [value]) để giá trị thì khi giá trị thay đổi nó sẽ chạy

    const handleOnClick = (urlLimit) => {
        const newUrl = urlLimit + 2;
        fetchApi(newUrl).then((data) => {
            setData(data);
        });
        setUrlLimit(newUrl);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-4 w-full h-full ">
                {data.length > 0 &&
                    data.map((item, index) => (
                        <div
                            key={index}
                            className="p-3 bg-white shadow-lg rounded-lg"
                        >
                            <img
                                src={item.download_url}
                                alt=""
                                className="w-full object-cover rounded-lg h-[200px]"
                            />
                        </div>
                    ))}
            </div>
            <div className="flex justify-center mt-10">
                <button
                    className="p-5 rounded-lg bg-blue-200 text-white"
                    onClick={handleOnClick}
                >
                    Load More
                </button>
            </div>
        </>
    );
};

export default Photo;
