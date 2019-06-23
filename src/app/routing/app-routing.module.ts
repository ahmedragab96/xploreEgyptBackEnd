import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../components/auth/login/login.component';
import { RegisterComponent } from './../components/auth/register/register.component';
import { TripPlannerComponent } from './../components/trip-planner/trip-planner.component';
import { HomeComponent } from './../components/home/home.component';
import { TripsComponent } from './../components/trips/trips.component';
import { AuthGuard } from '../components/auth/auth.guard';
import { AdminComponent } from './../components/AdminSection/admin/admin.component';
import {TripDetailsComponent} from './../components/trip-details/trip-details.component';
import { RestaurantsComponent } from '../components/restaurants/restaurants.component';
import { HotelsComponent } from '../components/hotels/hotels.component';
import { RestaurantDetailsComponent } from '../components/restaurant-details/restaurant-details.component';
import { HotelDetailsComponent } from '../components/hotel-details/hotel-details.component';
import { PostsComponent } from '../components/posts/posts.component';
import { UsersComponent } from '../components/AdminSection/DataBase/users/users.component';
import { HotelsCRUDComponent } from '../components/AdminSection/DataBase/hotels/hotels.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { TripsCRUDComponent } from '../components/AdminSection/DataBase/trips/trips.component';
import { RestaurantsCRUDComponent } from '../components/AdminSection/DataBase/restaurants/restaurants.component';
import { ChartsComponent } from '../components/AdminSection/charts/charts.component';
import { AddhotelComponent } from '../components/AdminSection/DataBase/hotels/addhotel/addhotel.component';
import { AddtripComponent } from '../components/AdminSection/DataBase/trips/addtrip/addtrip.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { AddrestaurantComponent } from '../components/AdminSection/DataBase/restaurants/addrestaurant/addrestaurant.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'planner', component: TripPlannerComponent , canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trips/:id', component: TripDetailsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:id', component: HotelDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditProfileComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'database/users',
        component: UsersComponent,
      },
      {
        path: 'database/hotels',
        component: HotelsCRUDComponent,
      },
      {
        path: 'database/trips',
        component: TripsCRUDComponent,
      },
      {
        path: 'database/hotels/addHotel',
        component: AddhotelComponent,
      },
      {
        path: 'database/trips/addTrip',
        component: AddtripComponent,
      },
      {
        path: 'database/restaurants',
        component: RestaurantsCRUDComponent,
      },
      {
        path: 'database/restaurants/addRestaurant',
        component: AddrestaurantComponent,
      },
    ]
  },
  { path: 'posts', component: PostsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})


export class AppRoutingMOdule {}
