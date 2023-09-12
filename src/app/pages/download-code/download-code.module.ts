import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { DownloadCode } from './download-code.component'

const routes = [
  {
    path: '',
    component: DownloadCode,
  },
]

@NgModule({
  declarations: [DownloadCode],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DownloadCode],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DownloadCodeModule {}
