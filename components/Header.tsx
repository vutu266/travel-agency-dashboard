import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Link } from 'react-router';
import { useLocation } from 'react-router';
import { cn } from '~/lib/utils';
interface Props {
    title: string;
    description: string;
    ctaUrl?: string;
    ctaText?: string
}

const Header = ({title, description, ctaText, ctaUrl}: Props ) => {

  const location = useLocation()

  return (
    <header>
        <article className='header'>
            <h1 className={
              cn('text-dark-100', 
              location.pathname === "/" ? 'text-2xl md:text-4xl font-bold': 'text-xl md:text-2xl font-semibold')}>
                {title}
            </h1>
            <p className={
              cn('text-gray-100 font-normal', 
              location.pathname === "/" ? 'text-base md:text-lg': 'text-sm md:text-lg')}>
                {description}
            </p>
        </article>

        {ctaText && ctaUrl && (
          <Link to={ctaUrl}>
              <ButtonComponent type='button' className='button-class h-11 w-full md:w-[150px] md:float-right'>
                <img src="assets/icons/plus.svg" alt="plus" className='size-5'/>
                <span className='p-16-semibold text-white'>{ctaText}</span>
              </ButtonComponent>
          </Link>
        )}
    </header>
  )
}

export default Header