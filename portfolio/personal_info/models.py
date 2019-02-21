# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Project(models.Model):
    LANG_CHOICES = [('Java', 'Java'), ('JavaScript', 'JavaScript'), ('Python', 'Python'), ('C++', 'C++'), ('PHP','PHP'), ('HTML', 'HTML')]
    name = models.CharField(max_length = 50)
    description = models.TextField()
    github = models.CharField(max_length = 100)
    language = models.CharField(max_length = 10, choices=LANG_CHOICES)
    isOnHome = models.BooleanField(default = 0)
    isOnProjects = models.BooleanField(default = 0)

    def __str__(self):
        return self.name
