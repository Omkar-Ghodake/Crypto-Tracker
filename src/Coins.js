import React from 'react'

const Coins = (props) => {

	const { market_cap_rank, image, name, symbol, current_price, price_change_24h, price_change_percentage_24h, market_cap } = props

	return (
			<>
				<table className="table table-dark table-hover text-white m-0">
					<tbody>
						<tr>
							<th className='width-2rem' scope="row">{market_cap_rank}</th>
							<td className='width-4rem text-end' scope="row">
								<img src={image} alt="" style={{ height: '1.5rem' }} />
							</td>
							<td style={{ verticalAlign: 'middle' }}>
								<strong>{name}</strong>
							</td>
							<td>{symbol.toUpperCase()}</td>
							<td>&#8377; {current_price.toLocaleString()}</td>
							<td className={`${price_change_24h < 0 ? 'neg' : 'pos'}`}>{price_change_24h.toFixed(2)}</td>
							<td className={`${price_change_percentage_24h < 0 ? 'neg' : 'pos'}`}>{price_change_percentage_24h.toFixed(2)}</td>
							<td>{market_cap.toLocaleString()}</td>
						</tr>
					</tbody>
				</table>
			</>
		)
}

export default Coins