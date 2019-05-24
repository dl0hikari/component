import $ from 'jquery';
import './jquery.raty';
import './rating.scss';
import Sloth from '../Sloth';

@Sloth.component({
    defaultOptions:{}
})

export default class Rating {
    onInit() {
        const options = this.options;
        const opthints = options.hint.split(',');
        $(this.dom).raty({
            starOff: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACOklEQVQ4jZWRv2uTQRzGn/ve2/cuJNBGEpvKSzqpOBV0z/0BDoqboIOjunRz0qGLU4WCtAhCR/8CKW5eCDiJg0NDWimWDi2EpNBw7w/fu3NJQ1JMU5/xeZ7v53t8D5ihVqu13Wq1dmb12GWh1voeEX1jjDlr7QOl1JdpXboMxDnfrNVqQRRFgnO+qbWe2p8aaK3vM8ZWlpaWWLVaBef8BmPsyX+BtNacc/4+iiJBRGCMoV6vS8bYutZa/msmuAC4BuAugIdBENQqlcooK5fLkFKW4jje1Fp/AvBdKdU7z1mz2XzKOX/mnFtxzpWFEHGxWJxbXFycK5VKE1uNMTg+Ps4Hg0GWpmmBiPpE9MNau82azWZaqVTCarWKQqEAokvvP5JzDsYYdLtddLvdjAC87PV6WRAEV4YAABEhDEP0+/0MwCo1Go2P3vuNdrud5nl+ZZC1Fu12O3XOfWg0Gls0fOYra+3nTqeTOudmQrz32Nvby/I8/+qcWwWG36+U8tbax0mS/Dw4OPgzC3R4eJgbY35Zax8ppdwINIRl1tq1JEmyWSBjTGqtXVNKmXPv4nWXhRABZkhKKQDUx70JEBHdHJZGOjs7w+np6QRICBFwzm+PexPbiehOGIYjwNHRUWqMyQEkUspiFEVyfn4eYRiCMXZrKghAPcsy7O7upsaY3Hv/1nu/ASCP4/jF/v7+GymlWFhYkN775akg733n5OTkuvd+3Xu/oZQajMXvtNZbcRw/T5LkNWPs9/jsXwZiBzjrF1sQAAAAAElFTkSuQmCC',
            starOn:  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABMElEQVQ4jaWSPy9EQRTFf/uISZRa8acRjSj4AJuobmQSjY5eQ0EiolBqNohiFVvQKSSbaKYYvoKV+AQSNJpVsXFVCm9l3ovZt8+ecu6Z3zmTuVAgFXumYptFvkoBZBG4S31ivLuJeZOCoFoQVlOxUX90oGKXgaXgaB5Yi/n/fJqKHQIegLnc6BmYNd599gSp2DFgAVgBNiPh58AVcG+8e/sFqdh1YDUFTMSqR/QCtIBmRcV+AKMlAXl1EmBrQAjATmK8uwAOB4AcGe8a3e8/AC7/AbkG9iD4NRU7AtwC1T4hLaBqvOtAsJDGuy/guESbky4kA0o1VQKUWZU8aLoEKOPtp1Gbn8XLa7IXKBy2gf00eQbYBl5jjYZzoEdgHKgDdePdezA7VbENYAPYBZ7Ci99B6Uc15jZKmwAAAABJRU5ErkJggg==',
            hints: opthints,
            scoreName : options.name,
            target    : `#${options.name}-target`,
            targetKeep: true,
            score: 1
        });
    }
}


