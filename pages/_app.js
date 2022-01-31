import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SEO from '@bradgarropy/next-seo'

function BitNob({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page)
	return getLayout(
		<>
			<SEO
				title='Welcome to Bitnob'
				description='Bitnob is a delightful way to save, borrow, pay, receive, and get paid in Bitcoin on time'
				keywords={['Savings', 'Bitcoin', 'DCA', 'Dollar Cost Averaging', 'Lightning Network', 'Lightning', 'USD Savings', 'Bitcoin Savings',' Automatically Save in Bitcoin', 'Buy', 'Sell', 'Send', 'Receive', 'Virtual Cards', 'Loans', 'Bitcoin Loans', 'APIs', 'Payments', 'Wallet', 'Accept payment in bitcoin', 'Remittance']}
				icon='/images/logo-full.png'
				twitter={{
					card: 'summary',
					site: '@bitnob_official',
					image: './images/aboutus-cover.png',
				}}
        facebook={{
          image: './images/aboutus-cover.png',
					url: 'https://bitnob.com',
					type: 'website'
        }}
			/>
			<Component {...pageProps} />
		</>,
	)
}

export default BitNob
