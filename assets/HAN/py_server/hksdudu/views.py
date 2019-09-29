from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'hksdudu/index.html', {})

#	latest_question_list = Question.objects.all().order_by('-pub_date')[:5]
#    context = {'latest_question_list':latest_question_list}
#    return render(request, 'polls/index.html', context)

# Create your views here.