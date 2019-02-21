# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin

from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    pass

# Register your models here.
