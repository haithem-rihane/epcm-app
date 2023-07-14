import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased bg-hero-pattern" dir="rtl">
    {props.meta}

    <div className="mx-auto max-w-screen-lg">
      <header className="pt-8">
        <nav>
          <ul className="flex flex-wrap justify-center items-center space-x-11 text-xl rounded-3xl bg-[#F1F1F1] bg-opacity-25 custom-header h-16">
            <li className="me-10">
              <Link
                href="/"
                className="border-none text-white hover:text-gray-900"
              >
                تطبيق بصير
              </Link>
            </li>
            <li className="me-10">
              <Link
                href="/about/"
                className="border-none text-white hover:text-gray-900"
              >
                الاحصائيات
              </Link>
            </li>
            <li className="me-10">
              <a
                className="border-none text-white hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                الكشف
              </a>
            </li>
            <li className="me-10">
              <Link
                href="/blog/"
                className="border-none text-white hover:text-gray-900"
              >
                البلاغات
              </Link>
            </li>
            <li className="me-10">
              <Link
                href="/blog/"
                className="border-none text-white hover:text-gray-900"
              >
                الإعدادت
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { Main };
