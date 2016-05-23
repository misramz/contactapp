import angular from 'angular';
import 'angular-ui-router';


import { AddController} from './controllers/add.controller';
import { ListController} from './controllers/list.controller';
import { SingleController} from './controllers/single.controller';


angular
     .module('app', ['ui.router'])
     .config(config)
     .constant('URL',url)
     .controller( 'AddController', AddController)
     .controller( 'ListController', ListController)
     .controller( 'SingleController', SingleController)
    ;

    const url = 'https://secret-forest-21470.herokuapp.com/collections/contactapp1212';
