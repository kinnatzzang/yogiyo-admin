interface AddMenuProps {
    onClose: () => void;
}

export default function AddMenu({ onClose }: AddMenuProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col bg-white w-1/2 h-auto rounded-2xl my-20">
                <div className="border py-6 px-3 bg- rounded-t-2xl">
                    <div className="flex justify-center text-xl font-bold w-full relative">
                        <span>메뉴 그룹 추가</span>
                        <button className="absolute right-4 pr-6" onClick={onClose}>
                            X
                        </button>
                    </div>
                </div>
                <div className="flex items-center mx-8 py-4 ">
                    <div className="flex flex-col text-lg gap-4">
                        <p>메뉴 그룹명</p>
                        <input
                            placeholder="메뉴그룹 입력란"
                            className="border rounded-lg w-[300px] h-[50px] pl-4"
                        ></input>
                        <p>0/70</p> {/* 입력 가능한 글자 수 */}
                    </div>
                </div>
                <div className="flex items-center mx-8 py-4 ">
                    <div className="flex flex-col w-full">
                        <span>메뉴그룹 설명(선택)</span>
                        <input
                            placeholder="그룹에 대한 설명을 입력해주세요"
                            className="border rounded-lg w-full"
                        ></input>
                        <p>0/250</p> {/* 입력 가능한 글자 수 */}
                    </div>
                </div>
                <div className="flex items-center mx-8 py-4">
                    <div className="flex flex-col">
                        <span>상태설정</span>
                        <div className="border rounded-lg">
                            <button>판매중</button>
                            <button>숨김</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
