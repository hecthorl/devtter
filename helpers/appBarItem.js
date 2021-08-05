import AppBarItem from 'components/AppBar/AppBarItem'

/**
 * Función de alto nivel para mapear íconos.
 * @param {Object} item - Iconos y su respectiva información.
 * @param {string} item.title Nombre visible de cada ícono
 * @param {string} item.href Path al que se diriguirá
 * @param {import('react').ReactElement} item.icon Ícono sbg hecho functional componente de react
 * @param {number} id Índice del array
 * @returns {import('react').ReactElement} Retorna todos los iconos hechos componentes.
 */
const appBarItem = ({ title, href, icon }, id) => (
   <AppBarItem key={id} title={title} href={href} icon={icon} />
)

export default appBarItem
