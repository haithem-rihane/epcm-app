import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="flex justify-between">
        <div>
          <img
            src={`${router.basePath}/assets/images/socpa_logo.png`}
            alt="SCOPA"
          /> 
          </div>
        <div>
        <img
            src={`${router.basePath}/assets/images/epmc_logo.png`}
            alt="EPMC"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col  items-center ">
          <div className="w-4/6 bg-gradient-to-t from-[#1FA855] rounded-b-3xl">
            <div className="text-6xl  text-center font-bold text-white">إبـقـاء لنبقى</div>
            <div className="text-3xl  text-center text-white">الوﺳﻴﻂ الموثوق ﻟﺘﺮﺗﻴﺐ ﺷﺮاﻛﺎت الأﻋﻤﺎل اﻟــﺘـﺠـﺎرﻳــﺔ وتـبادلـــها بـســهولـة وسلاســة</div>        
          </div>
        </div>
      </div>
      <div className="bg-degrad rounded-3xl pb-10">
        <div className="flex flex-row pt-12">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex items-center justify-center">
            <button className="bg-[#cba13a] w-64 h-16 hover:bg-blue-700 text-white text-3xl shadow-lg shadow-black font-bold py-2 px-4 rounded-full">
              ابدأ الآن
            </button>
          </div>
          <div className="w-1/3">          
            {/* <img
              className=""
              src={`${router.basePath}/assets/images/palm.png`}
              alt="EPMC"
            /> */}
          </div>
        </div>
        <div className="flex flex-col mt-10 justify-center">
          <div className="">
              <img
                className="custom-image"
                src={`${router.basePath}/assets/images/poster-movie-science-fiction.png`}
                alt="EPMC"
              />
          </div> 
          <div className="flex items-center justify-center">
            <div className="w-3/6 border-2 border-solid border-white rounded-3xl">
                <p className="text-white text-center ">
                منصة إبقاء: تواصل بين البائع والمستثمر للعثور على شريك ومنشأة للاستحواذ بأمان وتوفير تمويل. تتطلب منشآت غير متعثرة وبيانات دقيقة وسرية. تعرض المعلومات للمستثمرين والراغبين في الاستحواذ. تقلل التكاليف وتسرع العملية
                </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
              <p className="text-white text-5xl font-bold">وجهتك لتجارة دائمة</p>
          </div>
        
        </div>
        <div className="flex flex-row pt-12">
          <div className="w-2/4">
          <img
                className="mix-blend-multiply"
                src={`${router.basePath}/assets/images/arrow.png`}
                alt="EPMC"
              />
          </div>
          <div className="w-2/4 ">
          <img
                className="opacity-100"
                src={`${router.basePath}/assets/images/phone.png`}
                alt="EPMC"
              />
          </div>
        </div>
        </div>
        
    </Main>
  );
};

export default Index;
