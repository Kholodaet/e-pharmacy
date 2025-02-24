export const getSectorsStatistics = (productsCount, suppliersCount, customersCount) => [
	{
		name: 'products',
		title: 'All products',
		count: productsCount,
		icon: 'money',
	},
	{
		name: 'suppliers',
		title: 'All suppliers',
		count: suppliersCount,
		icon: 'money',
	},
	{
		name: 'customers',
		title: 'All customers',
		count: customersCount,
		icon: 'users',
	},
]
