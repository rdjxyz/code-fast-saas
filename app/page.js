import ButtonLogin from '@/components/ButtonLogin';

export default function Home() {
  const isLoggedIn = true;
  const name = 'Rick';
  return (
    <main>
      <header className='bg-base-200'>
        <nav className='max-w-3xl mx-auto flex justify-between items-center px-8 py-2'>
          <div className='font-bold'>CodeFastSaaS</div>
          <div className='space-x-4 max-md:hidden'>
            <a className='link link-hover' href=''>
              Pricing
            </a>
            <a className='link link-hover' href=''>
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </nav>
      </header>
      <section className='text-center px-8 py-32 max-w-3xl mx-auto'>
        <h1 className='text-4xl lg:text-5xl font-extrabold mb-6'>Collect customer feedback to build better products</h1>
        <div className='opacity-90 mb-10'>Create a feedback board in minutes, prioritize features, and build products your customers will love.</div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
