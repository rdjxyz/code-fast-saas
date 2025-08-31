import ButtonLogin from '@/components/ButtonLogin';
import PricingCard from '@/components/PricingCard';

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
      {/* Hero */}
      <section>
        <div className='text-center px-8 py-32 max-w-3xl mx-auto'>
          <h1 className='text-4xl lg:text-5xl font-extrabold mb-6'>Collect customer feedback to build better products</h1>
          <div className='opacity-90 mb-10'>Create a feedback board in minutes, prioritize features, and build products your customers will love.</div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      {/* Pricing */}
      <section className='bg-base-200'>
        <div className='px-8 py-32 max-w-3xl mx-auto'>
          <p className='text-sm uppercase font-medium text-center text-primary mb-4'>Pricing</p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>Pricing that adapts to your needs</h2>
          <div className='flex max-lg:flex-col justify-center items-center gap-6'>
            {/* Pricing Card */}
            <PricingCard tier='Basic' price='15' />
            {/* Pricing Card */}
            <PricingCard tier='Plus' price='29' />
            {/* Pricing Card */}
            <PricingCard tier='Premium' price='49' />
          </div>
        </div>
      </section>
    </main>
  );
}
