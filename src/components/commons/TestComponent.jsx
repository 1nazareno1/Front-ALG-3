//? Importaciones utilizadas dentro del componente
import React, { useState } from 'react'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const TestComponent = () => {
  //! Variables - useState guarda un estado que puede ser modificable a lo largo de la ejecución de la aplicación
  //! useNavigate es un hook de react-router-dom que nos permite redireccionar la ventana del usuario. En este caso redireccionamos a /foro al hacer click en el botón
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  //* Función - Se ejecuta al hacer click en el botón renderizado
  const handleClick = () => {
    console.log('Apretaste el boton!')

    //^ Seteamos la variable loading a true - Esto indica que se esta cargando la redirección
    setTimeout(() => {
      setLoading(true)
      console.log('Cargando')
    }, 2500)

    //^ Seteamos un timeout para mostrar como funcionaria un estado "cargando". Luego de cinco segundos se ejecuta el bloque de codigo que se encuentra dentro de las llaves {}
    setTimeout(() => {
      //^ Cuando termine el tiempo de cinco segundos, volvemos a poner loading en false (para no mostrar el Spinner de carga en el botón) y redirigimos a la url /foro
      setLoading(false)
      console.log('Reedireccionando')
      navigate('/foro')
    }, 7500)
  }

  //* Elementos que se van a renderizar y van a ser visibles en la pantalla del usuario. Pueden tener ciertas variables o cambiar segun el valor de estos. Por ejemplo, el botón de redirección mostrara un spinner de carga si el valor de loading es true y el texto "Ir a /foro" si el valor es false
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography>Boton de ejemplo</Typography>
      <Button variant="contained" onClick={handleClick}>
        {loading ? (
          <CircularProgress color="secondary" size={24.5} thickness={5} />
        ) : (
          'Ir a /foro'
        )}
      </Button>
    </Box>
  )
}
