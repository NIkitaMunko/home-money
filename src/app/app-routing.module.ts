import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path: '', loadChildren: () => import('./system/system.module').then(m => m.SystemModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
