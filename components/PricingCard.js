import { pricingTiers } from '@/lib/pricingTiers';
const PricingCard = ({ tier, price }) => {
  const tierData = pricingTiers[tier];
  return (
    <div className='card min-w-72 bg-base-100 shadow-sm'>
      <div className='card-body'>
        <span className={`badge badge-xs ${tierData.badgeStyle}`}>{tierData.badge}</span>
        <div className='flex justify-between'>
          <h2 className='text-3xl font-bold'>{tier}</h2>
          <span className='text-xl'>${price}/mo</span>
        </div>
        <ul className='mt-6 flex flex-col gap-2 text-xs'>
          {tierData.features.map(([enabled, tierFeature]) => (
            <li className={enabled ? '' : 'opacity-50'} key={tierFeature}>
              <svg xmlns='http://www.w3.org/2000/svg' className={`size-4 me-2 inline-block ${enabled ? 'text-success' : 'text-base-content/50'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              <span className={enabled ? '' : 'line-through'}>{tierFeature}</span>
            </li>
          ))}
        </ul>
        <div className='mt-6'>
          <button className='btn btn-primary btn-block'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
