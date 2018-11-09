import React from 'react';
import Card from '../../card/card';

export default () => {
  return(
    <Card
      description="Have you ever thought of hiring a phone operater to take orders
                  from customers and provide them with various information about your restaurant
                  ...Well this bot does just that, it takes orders from customers
                  and notifies admins about reservation and order details
                  also has a set of photo galleries to display available menus and a look around the restaurant."
      ps="admin panel is only accessible by admin with password protection for various tasks."
      imageTitle="Barashki Bot"
      image="https://i2-prod.mirror.co.uk/incoming/article8044939.ece/ALTERNATES/s1200/Screen-Shot-2016-05-25-at-100754.jpg"
      imageHeight="420px"
      github="https://github.com/rajjix/ptb-admin-user"
      livedemo="https://t.me/rajjix_bot"
    >
      Restaurant Bot
    </Card>
  );
}
