import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';


import gridView from 'plugins/rab_c3/grid.html';
import visEditor from 'plugins/rab_c3/c3_vis_editor.html';

import 'plugins/rab_c3/less/style.less';
import 'plugins/rab_c3/c3_controller';

VisTypesRegistryProvider.register(GridProvider);

import 'c3/c3.css';

export function GridProvider(Private) {
    var TemplateVisType = Private(TemplateVisTypeProvider);

    return new TemplateVisType({
        name: 'rabGrid',
        title: 'Grid',
        icon: 'fa-th-large',
        description: 'Add a digital grid to your dashboard.',
        requireSearch: false,
        template: gridView,
        params:{
            editor:visEditor,
            defaults: {
                data1:"30, 200, 100, 400, 150, 250",
                data2:"50, 20, 10, 40, 15, 25"
            }
        }
    });
}



