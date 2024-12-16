
const FilterTabs = (props) => {
    const buttonsData = [
        { name: 'All filters', label: 'All filters' },
        { name: 'Brands', label: 'Brands' },
        { name: 'New brand', label: 'New brand' },
        { name: 'Premium', label: 'Premium' },
    ];
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'tab-active' : 'shop-tab';
        return (
            <button
                type='button'
                className={`filter-tab ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}

            </button>
        )
    })
    return (
        <div className="shop-tabs wr1570">
            {buttons}
        </div>

    )
}

export default FilterTabs;