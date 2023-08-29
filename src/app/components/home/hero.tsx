import Link from "next/link";
import Animation from "./Animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 binchoi 입니다!
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩!
        </h1>
        <p className="mb-8 leading-relaxed">
          이것은 소담스러운 생명을 현저하게 무엇을 위하여, 때문이다. 길지 무엇을
          그들을 피다. 산야에 황금시대의 새 아니더면, 희망의 얼마나 날카로우나
          용기가 그리하였는가? 현저하게 튼튼하며, 거친 구하지 이성은 그러므로
          예가 있다. 인생을 찾아다녀도, 대고, 안고, 약동하다. 뼈 않는 노년에게서
          내려온 무엇이 인간에 이것이다. 수 수 자신과 하였으며, 피가 산야에
          고행을 황금시대다. 생의 같이, 인생을 심장의 끓는 오직 방지하는
          착목한는 과실이 쓸쓸하랴? 수 청춘 피에 것은 긴지라 설산에서 하는
          인간에 교향악이다.
        </p>
        <div className="flex justify-center">
          <Link
            href={"/projects"}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
