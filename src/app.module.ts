import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { NotebookModule } from './notebook/notebook.module';
import { MusicModule } from './music/music.module';

@Module({
  imports: [ToDoModule, AuthenticationModule, NotebookModule, MusicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
