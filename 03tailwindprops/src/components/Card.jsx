import React from "react";

function Card({ username, btnText = "visit me" }) {
    console.log(username);
    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] text-gray-50">
            <div>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-8">
                <div className="flex justify-between ">
                    <h2 className="flex justify-between " >{username} Bored ape accidental</h2>
                    <h2>Price</h2>
                </div>
                <div className="flex justify-between">
                    <p>#345</p>
                    <p>0.01</p>
                </div>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    {btnText}
                </button>
            </div>
        </div>

    )
}

export default Card