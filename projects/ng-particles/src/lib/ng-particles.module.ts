import { NgModule } from '@angular/core';
import { NgParticlesComponent } from './ng-particles.component';
import { RecursivePartial } from 'tsparticles/dist/Types/RecursivePartial';
import { IOptions } from 'tsparticles/dist/Options/Interfaces/IOptions';

@NgModule({
  declarations: [NgParticlesComponent],
  imports: [],
  exports: [NgParticlesComponent],
})
export class NgParticlesModule {}
export * from 'tsparticles/dist/Enums/InteractivityDetect';
export * from 'tsparticles/dist/Enums/MoveDirection';
export * from 'tsparticles/dist/Enums/OutMode';
export * from 'tsparticles/dist/Enums/PolygonMaskInlineArrangement';
export * from 'tsparticles/dist/Enums/PolygonMaskMoveType';
export * from 'tsparticles/dist/Enums/PolygonMaskType';
export * from 'tsparticles/dist/Enums/ProcessBubbleType';
export * from 'tsparticles/dist/Enums/RotateDirection';
export * from 'tsparticles/dist/Enums/ShapeType';
export * from 'tsparticles/dist/Enums/Modes/ClickMode';
export * from 'tsparticles/dist/Enums/Modes/DivMode';
export * from 'tsparticles/dist/Enums/Modes/HoverMode';

export type IParticlesParams = RecursivePartial<IOptions>;
