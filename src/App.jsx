import { Route, Routes } from 'react-router-dom'

import Detalle from './views/Detalle'
import DetallePedido from './views/DetallePedido'
import Home from './views/Home'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/pizzas/:id'
          element={<Detalle />}
        />

        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/carrito'
          element={<DetallePedido />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
