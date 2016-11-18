// @onlyOwnGrammar - As this has jsx
const ProductPrice = ({inStock, price}) => {
  const dashCode = 8211
  const dash = String.fromCharCode(dashCode)
  return (
    <span
      className={styles.uPrice}
      itemProp='offers'
      itemScope=''
      itemType='https://schema.org/Offer'
    >
      <span
        itemProp='price'
      >
        {inStock
          ? I18n.toCurrency(price)
          : <div className={styles.outOfStock}>
                      {`${dash}`}{I18n.t('spree.out_of_stock')}{`${dash}`}
            </div>}
      </span>
    </span>
  )
}