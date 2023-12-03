---
js: getList
---

{% assign zisyear = "2022" %}

# Lista aktywności na Adwent Rodzinny {{ zisyear }}

Ta lista zdradza, co przed nami na każdy dzień adwentu. Zachęcamy, aby jej nie podglądać i codziennie [wchodzić na stronę główną](/) i dać się zaskoczyć!

Dużo rodzin przez ostatnie lata zgłosiło jednak prośbę o taką listę, aby móc planować sobie dni lub nawet wydrukować ją i pociąć na mniejsze kartki i umieścić je w fizycznym kalendarzu adwentowym.

{% assign zisposts = site.posts | sort: 'date' %}
{% include list.html posts=zisposts year=zisyear %}

**[Powrót do strony głównej](/)**
