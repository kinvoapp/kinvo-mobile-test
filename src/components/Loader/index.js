import React, { useRef, useEffect, useState } from 'react'
import { Animated, View, Easing } from 'react-native'
import Loading from '../../assets/loading.svg'

function Loader() {
	const spinAnim = useRef(new Animated.Value(0)).current
	const [angle, setAngle] = useState(0)

	useEffect(() => {
		Animated.loop(
			Animated.timing(spinAnim, {
				toValue: 360,
				duration: 500,
				easing: Easing.linear,
				isInteraction: false,
				useNativeDriver: true
			})
		).start()

		const listenerId = spinAnim.addListener(({ value }) => setAngle(value))

		return () => spinAnim.removeListener(listenerId)
	}, [])

	return (
		<View
			style={{
				transform: [{ rotate: angle + 'deg' }],
				alignSelf: 'center',
				marginTop: 'auto',
				marginBottom: 'auto'
			}}>
			<Loading />
		</View>
	)
}

export default Loader
