from node_renderer.render_helpers import render_component


def home_page(request):
    return render_component(request)

def component_a(request):
    return render_component(request)

def async_component(request):
    return render_component(request)

def square(request, number_to_square):
    number_to_square = int(number_to_square)

    return render_component(request, actions=[
        {'type': 'SQUARE_NUMBER', 'number': number_to_square}
    ])