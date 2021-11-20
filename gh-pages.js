import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/arief-fajri/gelar-karya.git', // Update to point to your repository
  user: {
   name: 'arief-fajri', // update to use your name
   email: 'arief.fajri191@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);