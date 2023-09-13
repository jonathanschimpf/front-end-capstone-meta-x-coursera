const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About Us', path: '/about', anchorable: true });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('bookings', { name: 'Reservations', path: '/bookings', anchorable: true });
pages.set('confirmedBooking', { name: 'Confirmed Booking', path: '/confirmed-booking', anchorable: false });

export default pages;
