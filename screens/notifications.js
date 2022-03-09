import { View, Text } from 'react-native'
import React from 'react'
import BookingNotif from '../components/notifications/bookingNotif'
import CommentNotif from '../components/notifications/commentNotif'
import LikeNotif from '../components/notifications/likeNotif'

export default function Notifications() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <BookingNotif/>
      <CommentNotif/>
      <LikeNotif/>
    </View>
  )
}