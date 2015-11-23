import json

from django.http import Http404, HttpResponseServerError
from django.shortcuts import render, redirect
import requests

def render_component(request, actions=[]):
    request_payload = {
        'url': request.get_full_path(),
        'actions': actions
    }
    response = requests.post('http://localhost:3000/', json=request_payload).json()

    if response['status'] == 404:
        raise Http404

    if response['status'] == 500:
        return HttpResponseServerError()

    if response['status'] == 301:
        return redirect(response['redirect'])

    return render(request, 'main.html', {
        'markup': response['markup'],
        'state': json.dumps(response['state']),
        'title': response['title']
    })