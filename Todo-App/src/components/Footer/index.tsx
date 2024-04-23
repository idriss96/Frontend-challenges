const MainFooter = () => {
  return (
    <footer className="bg-gray-900 px-8 py-8 flex justify-center text-violet-50">
      <p className="text-sm">
        Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          TypeScript
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Tailwind CSS
        </a>
        ,{' '}
        <a
          href="https://eslint.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          ESLint
        </a>
        ,{' '}
        <a
          href="https://prettier.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Prettier
        </a>
        , and{' '}
        <a
          href=" https://www.husky.io/" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Husky
        </a>
        .
      </p>
    </footer>
  );
};

export default MainFooter;
